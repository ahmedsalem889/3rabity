import { LoginForm } from "./LoginForm"

export function LoginContainer({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 hidden lg:flex items-stretch p-0">
        {imageUrl ? (
          <img
            src={imageUrl || "/placeholder.svg"}
            alt="Garage with red cars"
            className="w-full h-full object-cover"
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        ) : (
          <div className="w-full flex items-center justify-center bg-gray-900 text-gray-500">
            <p>Image placeholder</p>
          </div>
        )}
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-12">
        <div style={{ maxWidth: "28rem", width: "100%" }}>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
