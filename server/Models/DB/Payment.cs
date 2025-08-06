using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace server.Models
{
    public class Payment
    {
        [BsonElement("id")]
        public ObjectId Id { get; set; } = ObjectId.GenerateNewId();

        [BsonElement("title")]
        public required string Title { get; set; }

        [BsonElement("amount")]
        public int Amount { get; set; }

        [BsonElement("issueDate")]
        public DateTime IssueDate { get; set; }
    }
}