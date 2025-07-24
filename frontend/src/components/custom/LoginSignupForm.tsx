import { useState } from 'react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';

export default function LoginSignupForm() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [isBusinessSeller, setIsBusinessSeller] = useState(false);
  const [acceptPolicy, setAcceptPolicy] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
      {/* Tabs */}
      <div className="flex mb-6 gap-1">
        <Button
          type="button"
          className={`flex-1 py-3 font-medium text-center rounded-t-md transition-colors ${
            activeTab === 'login'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-blue-600 border-b-2 border-blue-600'
          }`}
          onClick={() => setActiveTab('login')}
        >
          Sign in
        </Button>
        <Button
          type="button"
          className={`flex-1 py-3 font-medium text-center rounded-t-md transition-colors ${
            activeTab === 'signup'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-blue-600 border-b-2 border-blue-600'
          }`}
          onClick={() => setActiveTab('signup')}
        >
          Register
        </Button>
      </div>

      {activeTab === 'login' ? (
        <form className="space-y-4">
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">Email or Username</Label>
            <Input
              type="text"
              placeholder="Creativelayer088"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900"
            />
          </div>

          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">Password</Label>
            <Input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900"
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Checkbox
                id="remember"
                className="h-4 w-4 text-blue-600 focus:ring-blue-900 border-gray-300 rounded"
              />
              <Label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Remember
              </Label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgotten password?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Login
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              size="sm"
                variant="outline"
              className="flex items-center justify-center gap-2 bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition-colors"
            >
              <span>Facebook</span>
            </Button>
            <Button
              variant="outline"
              type="button"
              className="flex items-center justify-center gap-2 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              <span> +Google</span>
            </Button>
          </div>
        </form>
      ) : (
        <form className="space-y-4">
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">Username</Label>
            <Input
              type="text"
              placeholder="User@123"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900"
            />
          </div>

          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">Email</Label>
            <Input
              type="email"
              placeholder="User@gmail.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900"
            />
          </div>

          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">Phone</Label>
            <Input
              type="tel"
              placeholder="+91-9999999999"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900"
            />
          </div>

          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">Password</Label>
            <Input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900"
            />
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Input
                type="radio"
                id="privateSeller"
                name="sellerType"
                checked={!isBusinessSeller}
                onChange={() => setIsBusinessSeller(false)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-900 border-gray-300"
              />
              <Label htmlFor="privateSeller" className="ml-2 block text-sm text-gray-700">
                Private seller
              </Label>
            </div>
            <div className="flex items-center">
              <Input
                type="radio"
                id="businessSeller"
                name="sellerType"
                checked={isBusinessSeller}
                onChange={() => setIsBusinessSeller(true)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-900 border-gray-300"
              />
              <Label htmlFor="businessSeller" className="ml-2 block text-sm text-gray-700">
                Business seller
              </Label>
            </div>
          </div>

          <div className="flex items-center">
            <Checkbox
              checked={acceptPolicy}
              onCheckedChange={(checked) => setAcceptPolicy(checked === true)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-900 border-gray-300 rounded"
              id="acceptPolicy"
            />
            <Label htmlFor="acceptPolicy" className="ml-2 block text-sm text-gray-700">
              I accept the privacy policy
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Login
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">______ OR ______</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              type="button"
              className="flex items-center justify-center gap-2 bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition-colors"
            >
              <span>Facebook</span>
            </Button>
            <Button
              variant="outline"
              type="button"
              className="flex items-center justify-center gap-2 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              <span>+Google</span>
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}