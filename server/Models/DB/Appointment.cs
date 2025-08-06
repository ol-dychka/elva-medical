using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace server.Models
{
    public class Appointment
    {
        [BsonElement("id")]
        public ObjectId Id { get; set; } = ObjectId.GenerateNewId();

        [BsonElement("title")]
        public required string Title { get; set; }

        [BsonElement("doctorName")]
        public required string DoctorName { get; set; }

        [BsonElement("roomNumber")]
        public required string RoomNumber { get; set; }

        [BsonElement("date")]
        public DateTime Date { get; set; }
    }
}