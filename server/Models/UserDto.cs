namespace server.Models
{
    public class UserDto(User user)
    {
        public string Email { get; set; } = user.Email;
        public string Name { get; set; } = user.Name;
        public string Phone { get; set; } = user.Phone;
        public List<string> Courses { get; set; } = user.Courses;
        public List<AppointmentDto> Appointments { get; set; } =
            [.. user.Appointments.Select(a => new AppointmentDto(a))];
        public List<Prescription> Prescriptions { get; set; } = user.Prescriptions;
    }
}