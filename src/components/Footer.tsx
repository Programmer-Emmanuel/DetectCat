import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-gray-600 font-medium">
              Développé par <span className="text-blue-600 font-semibold">SmartGuardian</span>
            </span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} DetectCat. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
