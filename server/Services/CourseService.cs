using MongoDB.Driver;
using server.Models;

namespace server.Services
{
    public class CourseService
    {
        private readonly IMongoCollection<Course> _courses;

        public CourseService(IConfiguration config)
        {
            var client = new MongoClient(config["MongoDB:ConnectionString"]);
            var database = client.GetDatabase(config["MongoDB:DatabaseName"]);
            _courses = database.GetCollection<Course>("Courses");
        }

        public async Task CreateAsync(Course course) =>
            await _courses.InsertOneAsync(course);

        public async Task<List<Course>> FindMultipleAsync(List<string> ids) {
            var courses = await _courses.Find(c => ids.Contains(c.Id)).ToListAsync();

            return courses;
        }
    }
}