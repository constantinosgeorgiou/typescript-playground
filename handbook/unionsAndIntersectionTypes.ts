/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }

    if (typeof padding === "string") {
        return padding + value;
    }

    throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

console.log(padLeft("Padded", 1));
console.log(padLeft("Padded", "  "));

// UNIONS WITH COMMON FIELDS
// -------------------------

interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs();
// pet.swim(); // Error, because it's not common between Fish and Bird interfaces

// DISCRIMINATING UNIONS
// ---------------------

type NetworkLoadingState = {
    state: "loading";
}
type NetworkFailedState = {
    state: "failed";
    code: number;
}

type NetworkSuccessState = {
    state: "success";
    response: {
        title: string;
        duration: number;
        summary: string;
    };
};

// Represents only one of the above types but not sure yet.
type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSuccessState;

function logger(state: NetworkState): string {

    // state.code; // error because only exists in NetworkFailedState

    switch (state.state) {
        case "loading":
            return "Downloading..."

        case "failed":
            return `Error ${state.code} downloading`;
        case "success":
            return `Downloaded ${state.response.title} - ${state.response.summary}`;
    }
}

// INTERSECTION TYPES
// ------------------
// Combine multiple types into one.

interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtworksData {
    artworks: { title: string }[];
}

interface ArtistsData {
    artists: { name: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse) => {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.artists);
}