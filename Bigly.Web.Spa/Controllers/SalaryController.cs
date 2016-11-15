using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KendoUI.Web.Spa.Models;

namespace KendoUI.Web.Spa.Controllers
{
    public class SalaryController : Controller
    {
        // GET: Salary
        public ActionResult Index()
        {
            List<SalaryViewModel> salaries = new List<SalaryViewModel>(10);
            return View(salaries);
        }
    }
}