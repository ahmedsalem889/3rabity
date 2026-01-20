export function Features() {
  const features = [
    { icon: "/icons/ellipse-tools.png", title: "Full Maintenance", content: "Keep your vehicle in perfect condition with our complete maintenance services. From regular check-ups to major repairs, we ensure your car runs safely." },
    { icon: "/icons/ellipse-cart.png", title: "Store", content: "Explore our wide range of products and accessories at 3rabiity Store. Quality items, great prices, and everything you need to enhance your car experience." },
    { icon: "/icons/ellipse-phone.png", title: "Call Service", content: "Need help on the go? Our Call Service team is ready to assist you anytime, anywhere. Fast, reliable, and always at your service." },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="w-full px-4" >
        <div className="flex items-center gap-3 mb-6" >
          <h2 className="mb-6 sm:mb-8 lg:mb-10 font-bold text-xl sm:text-2xl lg:text-3xl" >
            <img
              src="/icons/3rabiity.png"
              alt="3rabiity"
              className="h-6 sm:h-8 mb-2 inline-block"
              style={{ display: "inline-block" }}
            />
            Features
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {features.map((feature, idx) => (
            <div key={idx}>
              <div className="text-center p-4 bg-white rounded">
                <img
                  src={feature.icon || "/placeholder.svg"}
                  alt={feature.title}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "contain",
                  }}
                  className="mb-3 mx-auto"
                  loading="lazy"
                />
                <h5 className="font-bold text-lg">{feature.title}</h5>
                <p className="text-gray-500">
                  {feature.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
