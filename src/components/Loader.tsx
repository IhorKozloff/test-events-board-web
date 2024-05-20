import { Hourglass } from 'react-loader-spinner';
interface IProps {
    isLoading: boolean;
}

export const Loader = ({ isLoading }: IProps) => {

    return (
        <>
            {isLoading && <div className="loader absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                <Hourglass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#306cce', '#72a1ed']}
                />
            </div>}
        </>
    );
    
};