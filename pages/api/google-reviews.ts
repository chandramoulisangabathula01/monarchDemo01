import { NextApiRequest, NextApiResponse } from 'next';

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID; // Your business's Place ID

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  if (!GOOGLE_PLACES_API_KEY || !PLACE_ID) {
    return res.status(500).json({ message: 'Missing required environment variables' });
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_PLACES_API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }

    const data = await response.json();
    const reviews = data.result?.reviews || [];

    // Sort reviews by time (most recent first) and limit to 3
    const sortedReviews = reviews
      .sort((a: any, b: any) => b.time - a.time)
      .slice(0, 3);

    return res.status(200).json({ reviews: sortedReviews });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return res.status(500).json({ message: 'Failed to fetch reviews' });
  }
}