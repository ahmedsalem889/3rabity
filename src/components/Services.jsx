export function Services() {
  const services = [
    {
      icon: "/icons/maintenance.svg",
      title: "Car maintenance",
      color: "#c41e3a",
    },
    { icon: "/icons/alert.svg", title: "Car Inspection", color: "#c41e3a" },
    { icon: "/icons/oil.svg", title: "Change oil", color: "#c41e3a" },
    { icon: "/icons/spray.svg", title: "Car Wash", color: "#c41e3a" },
    { icon: "/icons/spray.svg", title: "Car Spray", color: "#c41e3a" },
    { icon: "/icons/wrench.svg", title: "Fix Brake", color: "#c41e3a" },
    { icon: "/icons/wheel.svg", title: "Car Accessories", color: "#c41e3a" },
    { icon: "/icons/phone.svg", title: "Call service", color: "#c41e3a" },
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit!
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Column - Image */}
          <div className="flex items-center justify-center order-3 md:order-2 py-6 md:py-0">
            <img
              src="/images/group-2019.png"
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit!
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
