import TopHeader from '@/components/TopHeader';
import MainHeader from '@/components/MainHeader';
import NavHeader from '@/components/NavHeader';

export default function Loading() {
  return (
    <>
     
      
      <main className="py-12">
        <div className="bg-gradient-to-r from-orange-200 to-orange-400 text-black rounded-2xl py-16 mb-12 mx-4">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="h-10 w-64 bg-orange-300/50 rounded-lg animate-pulse mx-auto mb-6" />
            <div className="h-6 w-48 bg-orange-300/50 rounded-lg animate-pulse mx-auto" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-orange-100 rounded-xl p-6 mb-8 shadow-sm">
            <div className="h-8 w-64 bg-orange-200/50 rounded-lg animate-pulse mb-4" />
            <div className="h-6 w-96 bg-orange-200/50 rounded-lg animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-orange-100"
              >
                <div className="text-center">
                  <div className="h-6 w-48 bg-gray-200 rounded-lg animate-pulse mx-auto mb-3" />
                  <div className="h-8 w-32 bg-orange-200 rounded-full animate-pulse mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
} 