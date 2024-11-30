// 6.Parallel and sequential data fetching

// sequential data fetching
import { getArtist, getArtistPlaylists } from "@/utils";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // Get artist information
  const artist = await getArtist(id);
  if (!artist.id) notFound();

  return (
    <>
      <h1>{artist.name}</h1>
      {/* Show fallback UI while the Playlists component is loading */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Pass the artist ID to the Playlists component */}
        <Playlists artistID={artist.id} />
      </Suspense>
    </>
  );
}

async function Playlists({ artistID }: { artistID: string }) {
  // Use the artist ID to fetch playlists
  const playlists = await getArtistPlaylists(artistID);
  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  );
}

// Parallel data fetching
// import { getArtist, getArtistPlaylists } from "@/utils";

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;
//   const artistData = getArtist(id);
//   const PlaylistData = getArtistPlaylists(id);

//   const [artist, Playlist] = await Promise.all([artistData, PlaylistData]);

//   return (
//     <>
//       <h1>{artist.name}</h1>
//       <ul>
//         {Playlist.map((playlist) => (
//           <li key={playlist.id}>{playlist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
