using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace server.Models
{
    public class Course
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = ObjectId.GenerateNewId().ToString();

        [BsonElement("title")]
        public required string Title { get; set; }

        [BsonElement("instructor")]
        public required string Instructor { get; set; }

        [BsonElement("schedule")]
        public required List<CourseSession> Schedule { get; set; }

        [BsonElement("startDate")]
        public DateTime StartDate { get; set; }

        [BsonElement("endDate")]
        public DateTime FinishDate { get; set; }

    }

    public class CourseSession
    {
        [BsonElement("day")]
        public required string Day { get; set; }

        [BsonElement("time")]
        public required string Time { get; set; }
    }
}