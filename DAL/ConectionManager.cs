  
using System.Data.SqlClient;


namespace DAL
{
    public class ConectionManager
    {
        internal SqlConnection _conexion;
        public ConectionManager(string connectionString)
        {
            _conexion = new SqlConnection(connectionString);
        }
        public void Open()
        {
            _conexion.Open();
        }
        public void Close()
        {
            _conexion.Close();
        }

    }
}
