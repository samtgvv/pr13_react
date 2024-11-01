import { Accordeon } from "../../components/accordeon/Accordeon"
import { Banner } from "../../components/banner/Banner"
import { PauseOnHover } from "../../components/slider/Slider"

export function HomePage() {
    return (
        <section>
            <Banner />
            <Accordeon />
            <div className="slider container">
                <h2>Актуальные товары</h2>
                <PauseOnHover />
            </div>
        </section>
    )
}