using System.Web.Http.Controllers;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using WeatherApp.Controllers;
using WeatherApp.Models;

namespace WeatherApp.Windsor
{
    internal class WebWindsorInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(Component.For<ICityService>().ImplementedBy<CityService>().LifestyleScoped());
            container.Register(Component.For<IForecastService>().ImplementedBy<ForecastService>().LifestyleScoped());


            container.Register(Classes
                .FromAssemblyContaining<CitiesController>()
                .BasedOn<IHttpController>()
                .LifestyleScoped());

            container.Register(Classes
                .FromAssemblyContaining<ForecastController>()
                .BasedOn<IHttpController>()
                .LifestyleScoped());
        }
    }
}