export const imagePath = {
    methods: {
        getImagePath(item) {
            return require(`../assets/images/${item}`);
        }
    }
}