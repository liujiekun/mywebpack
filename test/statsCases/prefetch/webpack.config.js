module.exports = {
	mode: "production",
	entry: "./index",
	stats: {
		all: false,
		assets: true,
		entrypoints: true,
		chunkRelations: true,
		chunks: true
	}
};
