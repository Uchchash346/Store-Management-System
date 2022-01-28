import React from 'react';
import './Login.css';
const Login = () => {
    return (
        <div className="mt-80 flex justify-center ">
            <div class="w-full max-w-xs">
                <form class="shadow-md rounded px-8 pt-6 pb-8 mb-4 form-section">
                    <div class="mb-4">
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div class="mb-6">
                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                        <p class="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline login-button" type="button">
                            Sign In
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/signup">
                            Create an Account
                        </a>
                    </div>
                </form>
                <p class="text-center text-gray-600 text-xs">
                    &copy;2020 Store Management System. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Login;