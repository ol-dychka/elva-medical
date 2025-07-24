namespace server.Models
{
    public class AppointmentDto(Appointment appt)
    {
        public string Id { get; set; } = appt.Id.ToString();
        public string Title { get; set; } = appt.Title;
        public string DoctorName { get; set; } = appt.DoctorName;
        public string RoomNumber { get; set; } = appt.RoomNumber;
        public DateTime Date { get; set; } = appt.Date;
    }
}