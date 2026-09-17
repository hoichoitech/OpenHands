/**
 * Packing a handful of text files into a `.tar.gz`, in the browser.
 *
 * The automation service accepts a gzipped tar and nothing else, and the only
 * archives built here are the few small files a catalog bundle ships, so this
 * writes the original POSIX ustar format directly rather than pulling in a tar
 * library: 512-byte header, name and metadata as space-padded octal, content
 * padded to the next 512-byte boundary, two zero blocks to end the archive.
 * Gzip is the platform's own `CompressionStream`.
 *
 * Deliberately not general-purpose. Names must fit ustar's 100-byte field, and
 * only regular files are written - no directories, links, or long-name
 * extensions - because a bundle that needed any of those would be packed by
 * something that also has to unpack them.
 */
export interface TarFile {
    /** Path inside the archive. Must fit ustar's 100-byte name field. */
    name: string;
    content: string;
    /** Defaults to 0o644. A setup script wants 0o755. */
    mode?: number;
}
/** The uncompressed archive. Exported for tests; callers want `packTarGzip`. */
export declare function packTar(files: readonly TarFile[]): Uint8Array<ArrayBuffer>;
/** The gzipped archive, ready to POST as `application/gzip`. */
export declare function packTarGzip(files: readonly TarFile[]): Promise<Uint8Array>;
