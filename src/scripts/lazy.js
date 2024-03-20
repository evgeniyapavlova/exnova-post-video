export function lazy(node, params) {
    function observation(entries) {
        if (!entries[0].isIntersecting) return;
        node.src = node.dataset.src;
        observer.unobserve(node)
    }

    const observer = new IntersectionObserver(observation, params);

    observer.observe(node)

    return {
        onDestroy() {
            observer.unobserve(node)
        }
    }
}