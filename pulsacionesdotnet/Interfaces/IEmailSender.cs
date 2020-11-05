using System;
using System.Threading.Tasks;

namespace pulsacionesdotnet.Interfaces
{
    public interface IEmailSender
    {
            Task SendEmailAsync(string email, string subject, string message);
    }
}
