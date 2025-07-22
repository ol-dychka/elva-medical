using MongoDB.Bson.Serialization.Attributes;

namespace server.Models
{
    public class Appointment
    {
        [BsonElement("title")]
        public required string Title { get; set; }

        [BsonElement("doctorName")]
        public required string DoctorName { get; set; }

        [BsonElement("date")]
        public DateTime Date { get; set; }
    }
}