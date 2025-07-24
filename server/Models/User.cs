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
        public string Email { get; set; }

        [BsonElement("hashedPassword")]
        public string HashedPassword { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("phone")]
        public string Phone { get; set; }

        [BsonElement("courses")]
        [BsonRepresentation(BsonType.ObjectId)]
        public List<string> Courses { get; set; }

        [BsonElement("appointments")]
        public List<Appointment> Appointments { get; set; }

        [BsonElement("prescriptions")]
        public List<Prescription> Prescriptions { get; set; }

        [BsonElement("refreshToken")]
        public string? RefreshToken { get; set; }

        [BsonElement("refreshTokenExpiry")]
        public DateTime? RefreshTokenExpiry { get; set; }

        public User(RegisterDto dto, String refreshToken)
        {
            Email = dto.Email;
            HashedPassword = BCrypt.Net.BCrypt.HashPassword(dto.Password);
            Name = dto.Name;
            Phone = dto.Phone;
            Courses = [];
            Appointments = [ new Appointment {
                Title = "Monthly check-up",
                DoctorName = "Dr. Martin Black",
                RoomNumber = "503-A",
                Date = DateTime.UtcNow.AddDays(5)
            }];
            Prescriptions = [ new Prescription {
                Medication = "Aderrall",
                Frequency = "3 pills every day",
                StartDate = DateTime.UtcNow.AddDays(-3),
                FinishDate = DateTime.UtcNow.AddDays(11)
            }];
            RefreshToken = refreshToken;
            RefreshTokenExpiry = DateTime.UtcNow.AddDays(14);
        }
    }
}