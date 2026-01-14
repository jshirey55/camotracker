import "../styles/Pathofexile.css"

export default function Rings() {
    
    return (
        <div className="rings-container">
            <h1 className="rings-header">Rings</h1>
            
            <a className="ring" href = "https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/3qnwW0YGi5" target = "_blank">
            <img className="ring" src="https://cdn.poe2db.tw/image/Art/2DItems/Rings/Basetypes/GoldRing.webp" alt = "Gold Ring"/>
            <div>Giga Rarity</div>
            </a>

            <a className="ring" href="https://www.pathofexile.com/trade2/search/poe2/Fate%20of%20the%20Vaal/nrROnno9H0" target = "_blank">
            <img className="ring" src="https://cdn.poe2db.tw/image/Art/2DItems/Rings/Basetypes/PrismaticRing.webp" alt="Prismatic Ring" />
            <div>Res Rarity</div>
            </a>

        </div>
    )
}