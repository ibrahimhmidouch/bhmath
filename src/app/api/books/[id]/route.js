import { NextResponse } from 'next/server';
import { initMongoose } from '@/lib/mongoose';
import Book from '@/models/Book';

// GET - Fetch a single book by ID
export async function GET(request, { params }) {
  try {
    await initMongoose();
    
    const { id } = params;
    const book = await Book.findOne({ _id: id, isActive: true });

    if (!book) {
      return NextResponse.json(
        { error: 'Book not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(book);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch book' },
      { status: 500 }
    );
  }
}

// PUT - Update a book
export async function PUT(request, { params }) {
  try {
    await initMongoose();
    
    const { id } = params;
    const body = await request.json();
    const { title, content, image, description, author, pdfUrl } = body;

    const book = await Book.findById(id);

    if (!book) {
      return NextResponse.json(
        { error: 'Book not found' },
        { status: 404 }
      );
    }

    // Update fields if provided
    if (title !== undefined) book.title = title;
    if (content !== undefined) book.content = content;
    if (image !== undefined) book.image = image;
    if (description !== undefined) book.description = description;
    if (author !== undefined) book.author = author;
    if (pdfUrl !== undefined) book.pdfUrl = pdfUrl;

    await book.save();

    return NextResponse.json(book);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to update book' },
      { status: 500 }
    );
  }
}

// DELETE - Soft delete a book (set isActive to false)
export async function DELETE(request, { params }) {
  try {
    await initMongoose();
    
    const { id } = params;
    const book = await Book.findById(id);

    if (!book) {
      return NextResponse.json(
        { error: 'Book not found' },
        { status: 404 }
      );
    }

    book.isActive = false;
    await book.save();

    return NextResponse.json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to delete book' },
      { status: 500 }
    );
  }
}

