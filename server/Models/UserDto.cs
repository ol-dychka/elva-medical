namespace server.Models
{
    public class UserDto(User user)
    {
        public string Email { get; set; } = user.Email;
        public string Name { get; set; } = user.Name;
        public string Phone { get; set; } = user.Phone;
        public List<string> EnrolledCourses { get; set; } = user.EnrolledCourses;
    }
}