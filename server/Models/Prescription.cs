using MongoDB.Bson.Serialization.Attributes;

namespace server.Models
{
    public class Prescription
    {
        [BsonElement("medication")]
        public required string Medication { get; set; }

        [BsonElement("frequency")]
        public required string Frequency { get; set; }

        [BsonElement("startDate")]
        public DateTime StartDate { get; set; }

        [BsonElement("finishDate")]
        public DateTime FinishDate { get; set; }
    }
}