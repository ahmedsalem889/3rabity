export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <h6 className="font-bold mb-3">
              <img
                src="/icons/3rabiity.png"
                alt="3rabiity"
                className="h-8 mb-2"
              />
            </h6>
            <div className="flex gap-3">
              <a href="#" className="text-white no-underline">
                <img
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  className="max-h-8 object-contain "
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(22%) sepia(95%) saturate(2374%) hue-rotate(343deg) brightness(88%) contrast(96%)",
                  }}
                  loading="lazy"
                />
              </a>
              <a href="#" className="text-white no-underline">
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="max-h-8 object-contain "
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(22%) sepia(95%) saturate(2374%) hue-rotate(343deg) brightness(88%) contrast(96%)",
                  }}
                  loading="lazy"
                />
              </a>
              <a href="#" className="text-white no-underline">
                <img
                  src="/icons/x.svg"
                  alt="X (Twitter)"
                  className="max-h-8 object-contain "
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(22%) sepia(95%) saturate(2374%) hue-rotate(343deg) brightness(88%) contrast(96%)",
                  }}
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          <div>
            <h6 className="font-bold mb-3">Contact us</h6>
            <ul className="list-none p-0 text-sm">
              <li>
                <a href="#" className="text-white no-underline">
                  Help &amp; Support
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-3">Support</h6>
            <ul className="list-none p-0 text-sm">
              <li>
                <a href="#" className="text-white no-underline">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-3 text-center text-sm text-gray-500">
          © 2025 All Right Reserved
        </div>
      </div>
    </footer>
  );
}
