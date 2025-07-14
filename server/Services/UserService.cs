using MongoDB.Driver;
using server.Models;

namespace server.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _users;

        public UserService(IConfiguration config)
        {
            var client = new MongoClient(config["MongoDB:ConnectionString"]);
            var database = client.GetDatabase(config["MongoDB:DatabaseName"]);
            _users = database.GetCollection<User>("Users");
        }

        // case if user is logging in
        public async Task<User?> GetByEmailAsync(string email) =>
            await _users.Find(u => u.Email == email).FirstOrDefaultAsync();

        // case if user is logged in
        public async Task<User?> GetByRefreshTokenAsync(string refreshToken)
        {
            var user = await _users.Find(u => u.RefreshToken == refreshToken &&
                u.RefreshTokenExpiry > DateTime.UtcNow).FirstOrDefaultAsync();
            return user;
        }

        public async Task CreateAsync(User user) =>
            await _users.InsertOneAsync(user);

        public async Task<User?> ValidateByCredentialsAsync(string email, string password)
        {
            var user = await _users.Find(u => u.Email == email).FirstOrDefaultAsync();
            if (user == null || !BCrypt.Net.BCrypt.Verify(password, user.HashedPassword)) return null;
            return user;
        }

        public async Task SaveRefreshTokenAsync(string userId, string refreshToken)
        {
            var update = Builders<User>.Update
            .Set(u => u.RefreshToken, refreshToken)
            .Set(u => u.RefreshTokenExpiry, DateTime.UtcNow.AddDays(14));

            await _users.UpdateOneAsync(
                Builders<User>.Filter.Eq(u => u.Id, userId),
                update
            );
        }

        public async Task RemoveRefreshTokenAsync(string refreshToken)
        {
            var update = Builders<User>.Update
                .Set(u => u.RefreshToken, null)
                .Set(u => u.RefreshTokenExpiry, null);

            await _users.UpdateOneAsync(
                Builders<User>.Filter.Eq(u => u.RefreshToken, refreshToken),
                update
            );
        }
    }
}