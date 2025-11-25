'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function BookDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params.id) {
      fetchBook();
    }
  }, [params.id]);

  const fetchBook = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/books/${params.id}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Livre non trouvé');
        }
        throw new Error('Failed to fetch book');
      }
      const data = await response.json();
      
      setBook(data);
    } catch (err) {
      setError(err.message || 'Erreur lors du chargement du livre.');
      console.error('Error fetching book:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error || 'Livre non trouvé'}
          </div>
          <Link
            href="/livres"
            className="inline-block px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Retour aux livres
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href="/livres"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-4"
          >
            <svg
              className="h-5 w-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Retour aux livres
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {book.image && (
            <div className="relative w-full h-96 mb-6 rounded-lg overflow-hidden bg-gray-200">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {book.title}
            </h1>
            {book.author && (
              <p className="text-lg text-gray-600 mb-2">
                Par <span className="font-semibold">{book.author}</span>
              </p>
            )}
            {book.description && (
              <p className="text-gray-600 italic mb-4">{book.description}</p>
            )}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center text-sm text-gray-500">
                <span>
                  Publié le {new Date(book.createdAt).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              {book.pdfUrl && (
                <a
                  href={book.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Télécharger le PDF
                </a>
              )}
            </div>
          </header>

          <div className="prose max-w-none">
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: book.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}

