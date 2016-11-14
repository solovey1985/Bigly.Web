using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(KendoUI.Web.Spa.Startup))]
namespace KendoUI.Web.Spa
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
