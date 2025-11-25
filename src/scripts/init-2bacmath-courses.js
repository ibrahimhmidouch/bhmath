import connectDB from '@/lib/mongoose';
import Second_Bac_Math_Course from '@/models/SecondBacMathCourse';

const sampleCourses = [
  {
    name: 'Fonctions exponentielles',
    courseLink: '/course/2BacMath/fonctions-exponentielles',
    exerciseLink: '/exercice/2BacMath/fonctions-exponentielles'
  },
  {
    name: 'Fonctions logarithmes',
    courseLink: '/course/2BacMath/fonctions-logarithmes',
    exerciseLink: '/exercice/2BacMath/fonctions-logarithmes'
  },
  {
    name: 'Nombres complexes',
    courseLink: '/course/2BacMath/nombres-complexes',
    exerciseLink: '/exercice/2BacMath/nombres-complexes'
  },
  {
    name: 'Géométrie dans l\'espace',
    courseLink: '/course/2BacMath/geometrie-espace',
    exerciseLink: '/exercice/2BacMath/geometrie-espace'
  },
  {
    name: 'Probabilités',
    courseLink: '/course/2BacMath/probabilites',
    exerciseLink: '/exercice/2BacMath/probabilites'
  }
];

async function initializeCourses() {
  try {
    await connectDB();
    
    // Clear existing courses
    await Second_Bac_Math_Course.deleteMany({});
    
    // Insert new courses
    await Second_Bac_Math_Course.insertMany(sampleCourses);
    
    console.log('2BacMath courses initialized successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing courses:', error);
    process.exit(1);
  }
}

initializeCourses(); 