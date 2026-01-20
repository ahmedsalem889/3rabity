export function Services() {
  const services = [
    { icon: "/icons/maintenance.svg", title: "Car maintenance", color: "#c41e3a", content: "We provide complete car maintenance services using advanced tools and professional technicians to ensure top performance and safety." },
    { icon: "/icons/alert.svg", title: "Car Inspection", color: "#c41e3a", content: "Comprehensive vehicle inspection to detect potential issues early, with a detailed report on your car’s condition." },
    { icon: "/icons/oil.svg", title: "Change oil", color: "#c41e3a", content: "High-quality engine oil change service to improve engine performance and extend its lifespan." },
    { icon: "/icons/spray.svg", title: "Car Wash", color: "#c41e3a", content: "Professional interior and exterior car wash to keep your vehicle clean, shiny, and fresh." },
    { icon: "/icons/spray.svg", title: "Car Spray", color: "#c41e3a", content: "Expert car spray and painting services using premium materials for a smooth and durable finish." },
    { icon: "/icons/wrench.svg", title: "Fix Brake", color: "#c41e3a", content: "Brake system inspection and repair to ensure maximum safety and reliable stopping power." },
    { icon: "/icons/wheel.svg", title: "Car Accessories", color: "#c41e3a", content: "A wide range of high-quality car accessories designed to enhance comfort, style, and functionality." },
    { icon: "/icons/phone.svg", title: "Call service", color: "#c41e3a", content: "Contact us easily to request services or get support — our team is always ready to help." },
  ];

  const firstColumnServices = services.slice(0, 4);
  const lastColumnServices = services.slice(4);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="mb-6 sm:mb-8 lg:mb-10 font-bold text-xl sm:text-2xl lg:text-3xl">
          <img
            src="/icons/3rabiity.png"
            alt="3rabiity"
            className="h-6 sm:h-8 mb-2 inline-block"
          />
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* First Column - Services */}
          <div className="space-y-3 sm:space-y-4 order-1">
            {firstColumnServices.map((service, idx) => (
              <div key={idx}>
                <div className="p-3 sm:p-4 hover:shadow-md transition-shadow duration-200 rounded-lg border border-gray-100">
                  <img
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    className="mb-2 w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    style={{ color: service.color }}
                    loading="lazy"
                  />
                  <h6
                    className="font-bold mb-2 text-sm sm:text-base"
                    style={{ color: service.color }}
                  >
                    {service.title}
                  </h6>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {service.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Column - Image */}
          <div className="flex items-center justify-center order-3 md:order-2 py-6 md:py-0">
            <img
              src="/images/mobile.png"
              alt=""
              className="w-full max-w-[250px] sm:max-w-[300px] lg:max-w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Last Column - Services */}
          <div className="space-y-3 sm:space-y-4 order-2 md:order-3">
            {lastColumnServices.map((service, idx) => (
              <div key={idx}>
                <div className="p-3 sm:p-4 hover:shadow-md transition-shadow duration-200 rounded-lg border border-gray-100">
                  <img
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    className="mb-2 w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    style={{ color: service.color }}
                    loading="lazy"
                  />
                  <h6
                    className="font-bold mb-2 text-sm sm:text-base"
                    style={{ color: service.color }}
                  >
                    {service.title}
                  </h6>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {service.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
