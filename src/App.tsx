import { User, Bell, Plus, FileText, Clock, User as UserIcon } from 'lucide-react'
import exampleImage from 'figma:asset/f04fbc9ba2189a3f129e94a5227bcbb3fddabbcd.png'

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col max-w-sm mx-auto">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-100">
        <User className="w-6 h-6 text-gray-600" />
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-5 bg-white rounded-sm flex items-center justify-center">
              <div className="w-2 h-3 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          <span className="text-xl font-medium text-gray-900">unipass</span>
        </div>
        <Bell className="w-6 h-6 text-gray-600" />
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-4">
        <h1 className="text-2xl font-medium text-gray-900 mb-6">My Documents</h1>
        
        {/* Document Cards */}
        <div className="space-y-4">
          {/* Aadhaar Document */}
          <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg text-gray-900">Aadhaar Document</span>
            </div>
            <div className="w-16 h-12 bg-gray-300 rounded blur-sm"></div>
          </div>

          {/* Driving License */}
          <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-gray-400 rounded"></div>
              <span className="text-lg text-gray-900">Driving License</span>
            </div>
            <div className="w-16 h-12 bg-gray-300 rounded blur-sm"></div>
          </div>
        </div>

        {/* Add Document Button */}
        <button className="w-full border-2 border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-center gap-2 text-gray-600 hover:border-gray-400 transition-colors">
          <Plus className="w-5 h-5" />
          <span className="text-lg">Add Document</span>
        </button>

        {/* Share Button */}
        <button className="w-full bg-green-600 text-white rounded-xl p-4 text-lg font-medium hover:bg-green-700 transition-colors mt-8">
          Share
        </button>
      </main>

      {/* Bottom Navigation */}
      <nav className="border-t border-gray-200 p-4">
        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center gap-1">
            <FileText className="w-6 h-6 text-blue-500" />
            <span className="text-sm text-blue-500 font-medium">Documents</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Clock className="w-6 h-6 text-gray-400" />
            <span className="text-sm text-gray-400">History</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <UserIcon className="w-6 h-6 text-gray-400" />
            <span className="text-sm text-gray-400">Account</span>
          </div>
        </div>
      </nav>
    </div>
  )
}