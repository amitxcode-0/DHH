
function SignIn({ onSignIn }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950">
            <div className="w-full max-w-md rounded-2xl bg-gray-800 p-8 text-white">
                <h1 className="mb-6 text-center text-3xl font-bold">
                    Welcome Back
                </h1>

                <input
                    type="email"
                    placeholder="Enter your email"
                    className="mb-4 w-full rounded-lg p-3 text-white"
                />

                <input
                    type="password"
                    placeholder="Enter your password"
                    className="mb-6 w-full rounded-lg p-3 text-white"
                />

                <button
                    onClick={onSignIn}
                    className="w-full rounded-lg bg-green-500 p-3 font-semibold"
                >
                    Sign In
                </button>
            </div>
        </div>
    );
}

export default SignIn;

