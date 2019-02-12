﻿using System.Collections.Generic;

namespace ERSWebApp.Models
{
    public class Session
    {
        public int Id { get; set; }
        public string Date { get; set; }
        public string Day { get; set; }
        public string Type { get; set; }
        public string Site { get; set; }
        public string Time { get; set; }
        public string Template { get; set; }
        public double LOD { get; set; }
        public int Chairs { get; set; }
        public int OCC { get; set; }
        public int Estimate { get; set; }
        public int Holiday { get; set; }
        public string Note { get; set; }
        public int StaffCount { get; set; }
        public int State { get; set; }
        public List<SessionEmployee> Employees { get; set; }
    }
}
