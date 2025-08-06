namespace server.Models
{
    public class PaymentDto(Payment p)
    {
        public string Id { get; set; } = p.Id.ToString();
        public string Title { get; set; } = p.Title;
        public int Amount { get; set; } = p.Amount;
        public DateTime IssueDate { get; set; } = p.IssueDate;
    }
}