using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace server.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("email")]
        public required string Email { get; set; }

        [BsonElement("hashedPassword")]
        public required string HashedPassword { get; set; }

        [BsonElement("name")]

        public required string Name { get; set; }

        [BsonElement("phone")]

        public required string Phone { get; set; }

        [BsonElement("enrolledCourses")]
        [BsonRepresentation(BsonType.ObjectId)]

        public required List<string> EnrolledCourses { get; set; }

        [BsonElement("refreshToken")]
        public string? RefreshToken { get; set; }

        [BsonElement("refreshTokenExpiry")]
        public DateTime? RefreshTokenExpiry { get; set; }
    }
}