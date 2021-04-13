export function Rater(ratingElement) {
    const stars = ratingElement.querySelectorAll('.star');

    const resetRating = ev => {
        const currentRating = ratingElement.getAttribute('data-rating');
        highlightRating(currentRating);
    }

    const highlightRating = (rating) => {
        stars.forEach(star => {
            star.style.color = 
                rating >= star.getAttribute('data-value') ? 'yellow' : 'gray';
        });
    }

    resetRating();
}