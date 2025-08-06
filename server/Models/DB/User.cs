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
        public List<Payment> Payments { get; set; }

        [BsonElement("refreshToken")]
        public string? RefreshToken { get; set; }

        [BsonElement("refreshTokenExpiry")]
        public DateTime? RefreshTokenExpiry { get; set; }

        public User(RegisterDto dto, string refreshToken)
        {
            Email = dto.Email;
            HashedPassword = BCrypt.Net.BCrypt.HashPassword(dto.Password);
            Name = dto.Name;
            Phone = dto.Phone;
            Courses = ["6886ecdf0519fcd6949c10c2"];
            Appointments = [
                new Appointment {
                    Title = "Monthly check-up",
                    DoctorName = "Dr. Martin Black",
                    RoomNumber = "503-A",
                    Date = DateTime.UtcNow.AddDays(5)
                },
                new Appointment {
                    Title = "Allergy test",
                    DoctorName = "Dr. Barley White",
                    RoomNumber = "513",
                    Date = DateTime.UtcNow.AddDays(4)
                },
                new Appointment {
                    Title = "Dermatology Check",
                    DoctorName = "Dr. Mark Skinner",
                    RoomNumber = "521-B",
                    Date = DateTime.UtcNow.AddDays(19)
                }
            ];
            Prescriptions = [
                new Prescription {
                    Medication = "Aderrall",
                    Frequency = "3 pills every day",
                    StartDate = DateTime.UtcNow.AddDays(-3),
                    FinishDate = DateTime.UtcNow.AddDays(11)
                },
                new Prescription {
                    Medication = "Cetirizine (Zyrtec)",
                    Frequency = "1 pill every day",
                    StartDate = DateTime.UtcNow.AddDays(-1),
                    FinishDate = DateTime.UtcNow.AddDays(6)
                }
            ];
            Payments = [
                new Payment {
                    Title = "Monthly check-up",
                    Amount = 8000,
                    IssueDate = DateTime.UtcNow.AddDays(-25)
                },
                new Payment {
                    Title = "Monthly check-up",
                    Amount = 9000,
                    IssueDate = DateTime.UtcNow.AddDays(-55)
                },
                new Payment {
                    Title = "Monthly check-up",
                    Amount = 8500,
                    IssueDate = DateTime.UtcNow.AddDays(-85)
                },
            ];
            RefreshToken = refreshToken;
            RefreshTokenExpiry = DateTime.UtcNow.AddDays(14);
        }
    }
}