export const imagePath = {
    methods: {
        // function to be able to show an image in components easily
        getImagePath(item) {
            return require(`../assets/images/${item}`);
        }
    }
}