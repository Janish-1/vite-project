/**
 * Removes surrounding single or double quotes from a string
 * Example: `"hello"` → `hello`
 */
export function stripQuotes(value) {
    return value.replace(/^["'](.*)["']$/, "$1");
}

export function parseSkillArray(input) {
    try {
        // Try parsing as JSON array first
        const parsed = JSON.parse(input);
        if (Array.isArray(parsed)) {
            return parsed.map((item) =>
                typeof item === "string"
                    ? item.replace(/^["'](.*)["']$/, "$1")
                    : item
            );
        }
    } catch (e) {
        // If not valid JSON, fall back to comma-splitting
    }

    // Fallback: split by comma and trim items
    return input
        .split(",")
        .map((s) => s.trim().replace(/^["'](.*)["']$/, "$1"))
        .filter((s) => s.length > 0);
}
