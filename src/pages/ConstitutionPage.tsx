import { Image } from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { axiosInstance } from "../helpers/axiosInstance";
import { ConstitutionInterface } from "../models/ConstitutionInterface";

export const ConstitutionPage = () => {
    const [constitution, setConstitution] = useState<ConstitutionInterface[]>([]);

    const getData = useCallback(async () => {
        const response = await axiosInstance.get<ConstitutionInterface[]>('constitutionarticle');
        setConstitution(response.data);
    }, []);

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="flex justify-center items-center h-screen p-4">
            <div className="w-full h-full max-w-[600px] max-h-[800px] overflow-hidden">
                <HTMLFlipBook
                    width={400}
                    height={500}
                    className="custom-class"
                    startPage={0}
                    size="fixed"
                    minWidth={300}
                    maxWidth={1000}
                    minHeight={600}
                    maxHeight={Number(`calc(100vh - 100px)`)}
                    drawShadow={true}
                    flippingTime={1000}
                    useMouseEvents={true}
                    showCover={false}
                    style={{ margin: '0 auto' }}
                    usePortrait={true}
                    startZIndex={0}
                    autoSize={false}
                    maxShadowOpacity={0.5}
                    mobileScrollSupport={true}
                    clickEventForward={true}
                    swipeDistance={50}
                    showPageCorners={true}
                    disableFlipByClick={false}
                >
                    <div className="flex flex-col justify-center items-center w-full h-full">
                        <div className="bg-white shadow-lg p-5 flex flex-col items-center justify-around w-full h-full">
                            <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQviQ87uwkl_LdQqIoo4tBt93rRC_Fqvfethw&s"
                                className="w-full h-auto"
                                alt="Constitución de Colombia"
                            />
                            <h1 className="text-3xl text-center mt-4">Constitución de la República de Colombia</h1>
                            <p className="text-center font-bold">1991</p>
                        </div>
                    </div>
                    {
                        constitution.map((a, i) => (
                            <div key={i} className="bg-white shadow-lg p-5 flex flex-col h-full w-full overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
                                <p className="text-end">{i + 1}</p>
                                <h1 className="text-3xl text-center">Artículo {a.articleNumber}</h1>
                                <br />
                                <h2 className="text-xl text-center">{a.title}</h2>
                                <br />
                                <p className="wrap text-base overflow-auto">{a.content}</p>
                            </div>
                        ))
                    }
                </HTMLFlipBook>
            </div>
        </div>
    );
};