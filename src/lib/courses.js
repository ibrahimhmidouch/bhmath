import FirstCollegeCourse from '@/models/FirstCollegeCourse';
import SecondCollegeCourse from '@/models/SecondCollegeCourse';
import ThirdCollegeCourse from '@/models/ThirdCollegeCourse';
import CommonCoreScienceCourse from '@/models/CommonCoreScienceCourse';
import CommonCoreTechnicalCourse from '@/models/CommonCoreTechnicalCourse';
import CommonCoreLettersCourse from '@/models/CommonCoreLettersCourse';
import FirstBacMathCourse from '@/models/FirstBacMathCourse';
import FirstBacScienceCourse from '@/models/FirstBacScienceCourse';
import FirstBacEconomicsCourse from '@/models/FirstBacEconomicsCourse';
import FirstBacLettersCourse from '@/models/FirstBacLettersCourse';
import SecondBacMathACourse from '@/models/SecondBacMathACourse';
import SecondBacMathBCourse from '@/models/SecondBacMathBCourse';
import SecondBacLettersCourse from '@/models/SecondBacLettersCourse';
import SecondBacPhysicsChemistryLifeSciencesCourse from '@/models/SecondBacPhysicsChemistryLifeSciencesCourse';
import SecondBacTechnicalCommonCourse from '@/models/SecondBacTechnicalCommonCourse';
import SecondBacEconomicsCourse from '@/models/SecondBacEconomicsCourse';

// College Courses
export async function find_First_College_Course() {
  try {
    return await FirstCollegeCourse.find().sort({ createdAt: 1 });
  } catch (error) {
    console.error('Error fetching first college courses:', error);
    return [];
  }
}

export async function find_Second_College_Course() {
  try {
    return await SecondCollegeCourse.find().sort({ createdAt: 1 });
  } catch (error) {
    console.error('Error fetching second college courses:', error);
    return [];
  }
}

export async function find_Third_College_Course() {
  try {
    return await ThirdCollegeCourse.find().sort({ createdAt: 1 });
  } catch (error) {
    console.error('Error fetching third college courses:', error);
    return [];
  }
}

// Common Core Courses
export async function find_CommonCore_Science_Course() {
  try {
    return await CommonCoreScienceCourse.find().sort({ createdAt: 1 });
  } catch (error) {
    console.error('Error fetching common core science courses:', error);
    return [];
  }
}

export async function find_CommonCore_Technical_Course() {
  try {
    return await CommonCoreTechnicalCourse.find().sort({ createdAt: 1 });
  } catch (error) {
    console.error('Error fetching common core technical courses:', error);
    return [];
  }
}

export async function find_CommonCore_Letters_Course() {
  try {
    return await CommonCoreLettersCourse.find().sort({ createdAt: 1 });
  } catch (error) {
    console.error('Error fetching common core letters courses:', error);
    return [];
  }
}

// First Bac Courses
export async function find_FirstBac_Math_Course() {
  try {
    return await FirstBacMathCourse.find().sort({ createdAt: 1 });
  } catch (error) {
    console.error('Error fetching first bac math courses:', error);
    return [];
  }
}

export async function find_FirstBac_Science_Course() {
  try {
    return await FirstBacScienceCourse.find().sort({ createdAt: 1 });
  } catch (error) {
    console.error('Error fetching first bac science courses:', error);
    return [];
  }
}

export async function find_FirstBac_Economics_Course() {
  try {
    return await FirstBacEconomicsCourse.find().sort({ createdAt: 1 });
  } catch (error) {
    console.error('Error fetching first bac economics courses:', error);
    return [];
  }
}

export async function find_FirstBac_Letters_Course() {
  try {
    return await FirstBacLettersCourse.find().sort({ createdAt: 1 });
  } catch (error) {
    console.error('Error fetching first bac letters courses:', error);
    return [];
  }
}

// Second Bac Courses
export async function find_SecondBac_MathA_Course() {
  try {
    return await SecondBacMathACourse.find().sort({ createdAt: 1 });
  } catch (error) {
    console.error('Error fetching second bac math A courses:', error);
    return [];
  }
}

export async function find_SecondBac_MathB_Course() {
  try {
    return await SecondBacMathBCourse.find().sort({ createdAt: 1 });
  } catch (error) {
    console.error('Error fetching second bac math B courses:', error);
    return [];
  }
}

export async function find_SecondBac_Letters_Course() {
  try {
    return await SecondBacLettersCourse.find().sort({ createdAt: 1 });
  } catch (error) {
    console.error('Error fetching second bac letters courses:', error);
    return [];
  }
}

export async function find_SecondBac_PhysicsChemistryLifeSciences_Course() {
  try {
    return await SecondBacPhysicsChemistryLifeSciencesCourse.find().sort({ createdAt: 1 });
  } catch (error) {
    console.error('Error fetching second bac physics chemistry life sciences courses:', error);
    return [];
  }
}

export async function find_SecondBac_TechnicalCommon_Course() {
  try {
    return await SecondBacTechnicalCommonCourse.find().sort({ createdAt: 1 });
  } catch (error) {
    console.error('Error fetching second bac technical common courses:', error);
    return [];
  }
}

export async function find_SecondBac_Economics_Course() {
  try {
    return await SecondBacEconomicsCourse.find().sort({ createdAt: 1 });
  } catch (error) {
    console.error('Error fetching second bac economics courses:', error);
    return [];
  }
} 