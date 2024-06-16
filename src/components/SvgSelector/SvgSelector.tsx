interface Props {
    id: string
}
export default function SvgSelector({id} : Props) {
    switch (id) {
        case "osu":
            return (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 1000 1000"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M780.145 365C792.842 365 801.549 374.432 801.549 387.492V508.295C801.549 521.355 792.842 530.787 780.145 530.787C767.086 530.787 758.742 521.355 758.742 508.295V387.492C758.742 374.432 767.086 365 780.145 365ZM780.145 607.694C764.546 607.694 752.212 595.36 752.212 579.761C752.212 564.525 764.546 552.19 780.145 552.19C795.745 552.19 808.079 564.525 808.079 579.761C808.079 595.36 795.745 607.694 780.145 607.694Z"
                        fill="black"
                    />
                    <path
                        d="M701.968 423.406C715.028 423.406 723.372 432.838 723.372 445.535V525.708C723.372 584.84 686.915 607.694 642.656 607.694C598.035 607.694 561.578 584.84 561.578 525.708V445.535C561.578 432.838 569.922 423.406 582.982 423.406C595.679 423.406 604.385 432.838 604.385 445.535V522.806C604.385 555.092 617.988 567.789 642.656 567.789C666.962 567.789 680.565 555.092 680.565 522.806V445.535C680.565 432.838 689.271 423.406 701.968 423.406Z"
                        fill="black"
                    />
                    <path
                        d="M440.2 472.381C440.2 484.352 452.534 488.706 476.115 494.147C508.764 502.128 539.963 510.472 539.963 550.74C539.963 589.919 510.941 607.695 469.222 607.695C434.759 607.695 409.727 595.723 398.119 581.938C389.049 571.055 390.138 561.623 398.844 553.279C409.727 542.759 419.159 547.112 425.327 552.553C435.121 561.623 447.093 571.055 470.31 571.055C487.723 571.055 498.607 565.25 498.607 553.642C498.607 542.033 486.998 538.043 456.525 529.699C426.415 521.355 399.57 513.374 399.57 477.46C399.57 437.192 432.219 420.504 468.496 420.504C489.174 420.504 512.755 425.946 527.266 441.545C533.433 447.712 538.149 456.419 527.266 468.39C516.382 479.636 508.401 476.371 500.783 470.567C493.891 465.488 481.919 456.782 463.78 456.782C451.446 456.782 440.2 460.772 440.2 472.381Z"
                        fill="black"
                    />
                    <path
                        d="M281.815 607.695C229.509 607.695 192 567.661 192 513.797C192 459.569 229.509 419.899 281.815 419.899C334.122 419.899 371.631 459.569 371.631 513.797C371.631 567.661 334.122 607.695 281.815 607.695ZM281.815 567.661C312.098 567.661 331.025 544.368 331.025 513.797C331.025 483.225 312.098 459.569 281.815 459.569C251.533 459.569 232.606 483.225 232.606 513.797C232.606 544.368 251.533 567.661 281.815 567.661Z"
                        fill="black"
                    />
                    <path
                        d="M950 500C950 748.528 748.528 950 500 950C251.472 950 50 748.528 50 500C50 251.472 251.472 50 500 50C748.528 50 950 251.472 950 500ZM95 500C95 723.675 276.325 905 500 905C723.675 905 905 723.675 905 500C905 276.325 723.675 95 500 95C276.325 95 95 276.325 95 500Z"
                        fill="black"
                    />
                </svg>
            )
    }
}