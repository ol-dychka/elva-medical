namespace server.Models
{
    public class PrescriptionDto(Prescription p)
    {
        public string Id { get; set; } = p.Id.ToString();
        public string Medication { get; set; } = p.Medication;
        public string Frequency { get; set; } = p.Frequency;
        public DateTime StartDate { get; set; } = p.StartDate;
        public DateTime FinishDate { get; set; } = p.FinishDate;
    }
}