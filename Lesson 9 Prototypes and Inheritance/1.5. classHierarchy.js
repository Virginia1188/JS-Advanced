function classHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        changeUnits(value) {
            this.units = value;
        }

        metricConversion(num) {
            if (this.units === "m") return (num /= 100);
            if (this.units === "mm") return (num *= 10);
            return num;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        #radius
        constructor(radius) {
            super()
            this.#radius = radius;
        }

        get area() {
            this.radius = this.metricConversion(this.#radius);
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        #width
        #height
        constructor(width, height, units) {
            super(units)
            this.#width = width;
            this.#height = height;
        }

        get area() {
            this.width = this.metricConversion(this.#width);
            this.height = this.metricConversion(this.#height);
            return this.width * this.height;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return { Figure, Circle, Rectangle }
}
