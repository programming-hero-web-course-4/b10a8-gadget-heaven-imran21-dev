import { Link, useNavigate, useOutletContext } from "react-router-dom";
import OrderItem from "./OrderItem/OrderItem";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useEffect } from "react";


const Orders = () => {
    useEffect(()=>{
        document.title = 'Orders | Gadget Heaven'
    },[])
    const [, , , , , , ,defaultOrder,time] = useOutletContext();
    const navigate = useNavigate();
    const backBtn = ()=>{
        navigate(-1)
    }

    return (
        <div className="min-h-screen"> 
            <div className="bg-pColor">
                <div className="pt-7 flex md:container mx-auto items-center">
               

               <div className=" w-full">
               <div className="md:container mx-auto flex justify-center items-center relative">
                <button onClick={backBtn} className="left-0 btn bg-pColor/0 border-none px-0 py-0 h-max rounded-full hover:bg-pColor/10 min-h-0 text-white absolute text-3xl hidden md:block"><IoArrowBackCircleOutline></IoArrowBackCircleOutline></button>

                 <h1 className="text-xl md:text-3xl text-white font-bold">Orders</h1>
                </div>
               <p className="text-xs text-center w-3/4 md:w-2/5 mx-auto md:text-sm pt-4 text-white/90">Explore the latest gadgets that will take your experience to the next level.
               From smart devices to the coolest accessories, we have it all!</p>
               </div>
                </div>
                <div className="grid grid-cols-7 justify-items-center md:container mx-auto text-white font-medium md:font-bold pt-6 pb-3 md:text-base text-[6px] md:px-0 px-2">
                <h1 className="col-span-2">Items</h1>
                <h1>Category</h1>
                <h1>Product ID</h1>
                <h1>Price</h1>
                <h1>Order Date</h1>
                <h1>Delivery Status</h1>
                </div>
            </div>
            <div className="md:container mx-auto px-2 md:px-0">
            {
            defaultOrder.length < 1 ?
            <div className="text-center pt-56 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="200" height="100" viewBox="0 0 896 747.97143" ><title>empty_cart</title><path d="M193.634,788.75225c12.42842,23.049,38.806,32.9435,38.806,32.9435s6.22712-27.47543-6.2013-50.52448-38.806-32.9435-38.806-32.9435S181.20559,765.7032,193.634,788.75225Z" transform="translate(-152 -76.01429)" fill="#2f2e41"/><path d="M202.17653,781.16927c22.43841,13.49969,31.08016,40.3138,31.08016,40.3138s-27.73812,4.92679-50.17653-8.57291S152,772.59636,152,772.59636,179.73811,767.66958,202.17653,781.16927Z" transform="translate(-152 -76.01429)" fill="#6c63ff"/><rect x="413.2485" y="35.90779" width="140" height="2" fill="#f2f2f2"/><rect x="513.2485" y="37.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="452.2485" y="37.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="484.2485" y="131.90779" width="140" height="2" fill="#f2f2f2"/><rect x="522.2485" y="113.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="583.2485" y="113.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="670.2485" y="176.90779" width="140" height="2" fill="#f2f2f2"/><rect x="708.2485" y="158.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="769.2485" y="158.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="656.2485" y="640.90779" width="140" height="2" fill="#f2f2f2"/><rect x="694.2485" y="622.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="755.2485" y="622.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="417.2485" y="319.90779" width="140" height="2" fill="#f2f2f2"/><rect x="455.2485" y="301.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="516.2485" y="301.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="461.2485" y="560.90779" width="140" height="2" fill="#f2f2f2"/><rect x="499.2485" y="542.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="560.2485" y="542.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="685.2485" y="487.90779" width="140" height="2" fill="#f2f2f2"/><rect x="723.2485" y="469.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="784.2485" y="469.90779" width="2" height="18.5" fill="#f2f2f2"/><polygon points="362.06 702.184 125.274 702.184 125.274 700.481 360.356 700.481 360.356 617.861 145.18 617.861 134.727 596.084 136.263 595.347 146.252 616.157 362.06 616.157 362.06 702.184" fill="#2f2e41"/><circle cx="156.78851" cy="726.03301" r="17.88673" fill="#3f3d56"/><circle cx="333.10053" cy="726.03301" r="17.88673" fill="#3f3d56"/><circle cx="540.92726" cy="346.153" r="11.07274" fill="#3f3d56"/><path d="M539.38538,665.76747H273.23673L215.64844,477.531H598.69256l-.34852,1.10753Zm-264.8885-1.7035H538.136l58.23417-184.82951H217.95082Z" transform="translate(-152 -76.01429)" fill="#2f2e41"/><polygon points="366.61 579.958 132.842 579.958 82.26 413.015 418.701 413.015 418.395 413.998 366.61 579.958" fill="#f2f2f2"/><polygon points="451.465 384.7 449.818 384.263 461.059 341.894 526.448 341.894 526.448 343.598 462.37 343.598 451.465 384.7" fill="#2f2e41"/><rect x="82.2584" y="458.58385" width="345.2931" height="1.7035" fill="#2f2e41"/><rect x="101.45894" y="521.34377" width="306.31852" height="1.7035" fill="#2f2e41"/><rect x="254.31376" y="402.36843" width="1.7035" height="186.53301" fill="#2f2e41"/><rect x="385.55745" y="570.79732" width="186.92877" height="1.70379" transform="translate(-274.73922 936.23495) rotate(-86.24919)" fill="#2f2e41"/><rect x="334.45728" y="478.18483" width="1.70379" height="186.92877" transform="translate(-188.46866 -52.99638) rotate(-3.729)" fill="#2f2e41"/><rect y="745" width="896" height="2" fill="#2f2e41"/><path d="M747.41068,137.89028s14.61842,41.60627,5.62246,48.00724S783.39448,244.573,783.39448,244.573l47.22874-12.80193-25.86336-43.73993s-3.37348-43.73992-3.37348-50.14089S747.41068,137.89028,747.41068,137.89028Z" transform="translate(-152 -76.01429)" fill="#a0616a"/><path d="M747.41068,137.89028s14.61842,41.60627,5.62246,48.00724S783.39448,244.573,783.39448,244.573l47.22874-12.80193-25.86336-43.73993s-3.37348-43.73992-3.37348-50.14089S747.41068,137.89028,747.41068,137.89028Z" transform="translate(-152 -76.01429)" opacity="0.1"/><path d="M722.87364,434.46832s-4.26731,53.34138,0,81.07889,10.66828,104.5491,10.66828,104.5491,0,145.08854,23.4702,147.22219,40.53945,4.26731,42.6731-4.26731-10.66827-12.80193-4.26731-17.06924,8.53462-19.20289,0-36.27213,0-189.8953,0-189.8953l40.53945,108.81641s4.26731,89.61351,8.53462,102.41544-4.26731,36.27213,10.66827,38.40579,32.00483-10.66828,40.53945-14.93559-12.80193-4.26731-8.53462-6.401,17.06924-8.53462,12.80193-10.66828-8.53462-104.54909-8.53462-104.54909S879.69728,414.1986,864.7617,405.664s-24.537,6.16576-24.537,6.16576Z" transform="translate(-152 -76.01429)" fill="#2f2e41"/><path d="M761.27943,758.78388v17.06924s-19.20289,46.39942,0,46.39942,34.13848,4.8083,34.13848-1.59266V763.05119Z" transform="translate(-152 -76.01429)" fill="#2f2e41"/><path d="M887.16508,758.75358v17.06924s19.20289,46.39941,0,46.39941-34.13848,4.80831-34.13848-1.59266V763.02089Z" transform="translate(-152 -76.01429)" fill="#2f2e41"/><circle cx="625.28185" cy="54.4082" r="38.40579" fill="#a0616a"/><path d="M765.54674,201.89993s10.66828,32.00482,27.73752,25.60386l17.06924-6.401L840.22467,425.9337s-23.47021,34.13848-57.60869,12.80193S765.54674,201.89993,765.54674,201.89993Z" transform="translate(-152 -76.01429)" fill="#6c63ff"/><path d="M795.41791,195.499l9.60145-20.26972s56.54186,26.67069,65.07648,35.20531,8.53462,21.33655,8.53462,21.33655l-14.93559,53.34137s4.26731,117.351,4.26731,121.61834,14.93559,27.73751,4.26731,19.20289-12.80193-17.06924-21.33655-4.26731-27.73751,27.73752-27.73751,27.73752Z" transform="translate(-152 -76.01429)" fill="#3f3d56"/><path d="M870.09584,349.12212l-6.401,59.74234s-38.40579,34.13848-29.87117,36.27214,12.80193-6.401,12.80193-6.401,14.93559,14.93559,23.47021,6.401S899.967,355.52309,899.967,355.52309Z" transform="translate(-152 -76.01429)" fill="#a0616a"/><path d="M778.1,76.14416c-8.51412-.30437-17.62549-.45493-24.80406,4.13321a36.31263,36.31263,0,0,0-8.5723,8.39153c-6.99153,8.83846-13.03253,19.95926-10.43553,30.92537l3.01633-1.1764a19.75086,19.75086,0,0,1-1.90515,8.46261c.42475-1.2351,1.84722.76151,1.4664,2.01085L733.543,139.792c5.46207-2.00239,12.25661,2.05189,13.08819,7.80969.37974-12.66123,1.6932-27.17965,11.964-34.59331,5.17951-3.73868,11.73465-4.88,18.04162-5.8935,5.81832-.935,11.91781-1.82659,17.49077.08886s10.31871,7.615,9.0553,13.37093c2.56964-.88518,5.44356.90566,6.71347,3.30856s1.33662,5.2375,1.37484,7.95506c2.73911,1.93583,5.85632-1.9082,6.97263-5.07112,2.62033-7.42434,4.94941-15.32739,3.53783-23.073s-7.72325-15.14773-15.59638-15.174a5.46676,5.46676,0,0,0,1.42176-3.84874l-6.48928-.5483a7.1723,7.1723,0,0,0,4.28575-2.25954C802.7981,84.73052,782.31323,76.29477,778.1,76.14416Z" transform="translate(-152 -76.01429)" fill="#2f2e41"/><path d="M776.215,189.098s-17.36929-17.02085-23.62023-15.97822S737.80923,189.098,737.80923,189.098s-51.20772,17.06924-49.07407,34.13848S714.339,323.51826,714.339,323.51826s19.2029,100.28179,2.13366,110.95006,81.07889,38.40579,83.21254,25.60386,6.401-140.82123,0-160.02412S776.215,189.098,776.215,189.098Z" transform="translate(-152 -76.01429)" fill="#3f3d56"/><path d="M850.89294,223.23648h26.38265S895.6997,304.31537,897.83335,312.85s6.401,49.07406,4.26731,49.07406-44.80675-8.53462-44.80675-2.13365Z" transform="translate(-152 -76.01429)" fill="#3f3d56"/><path d="M850,424.01429H749c-9.85608-45.34-10.67957-89.14649,0-131H850C833.70081,334.115,832.68225,377.62137,850,424.01429Z" transform="translate(-152 -76.01429)" fill="#f2f2f2"/><path d="M707.93806,368.325,737.80923,381.127s57.60868,8.53462,57.60868-14.93559-57.60868-10.66827-57.60868-10.66827L718.60505,349.383Z" transform="translate(-152 -76.01429)" fill="#a0616a"/><path d="M714.339,210.43455l-25.60386,6.401L669.53227,329.91923s-6.401,29.87117,4.26731,32.00482S714.339,381.127,714.339,381.127s4.26731-32.00483,12.80193-32.00483L705.8044,332.05288,718.60633,257.375Z" transform="translate(-152 -76.01429)" fill="#3f3d56"/><rect x="60.2485" y="352.90779" width="140" height="2" fill="#f2f2f2"/><rect x="98.2485" y="334.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="159.2485" y="334.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="109.2485" y="56.90779" width="140" height="2" fill="#f2f2f2"/><rect x="209.2485" y="58.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="148.2485" y="58.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="250.2485" y="253.90779" width="140" height="2" fill="#f2f2f2"/><rect x="350.2485" y="255.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="289.2485" y="255.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="12.2485" y="252.90779" width="140" height="2" fill="#f2f2f2"/><rect x="112.2485" y="254.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="51.2485" y="254.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="180.2485" y="152.90779" width="140" height="2" fill="#f2f2f2"/><rect x="218.2485" y="134.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="279.2485" y="134.90779" width="2" height="18.5" fill="#f2f2f2"/></svg>
               
            <h1 className="pt-5">Looks like your list is empty—add your first item to get started!</h1>
            <Link to='/' className="btn bg-pColor rounded-full text-white px-8 mt-5">Add Item</Link>
            </div>:defaultOrder.map((item ,idx) => <OrderItem item={item} time={time} key={idx}></OrderItem>)
            
            }
            </div>
            {
            defaultOrder.length < 1 ? '' : <div className="flex justify-center md:container mx-auto pt-5">
            <svg className="relative z-50" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="150" height="100" viewBox="0 0 829 364.82907"><path id="gas" d="M432.12988,567.97449c-2.85009,22.33-13.33008,42.76-24.51025,62.44-.36963.67-.75,1.33-1.13965,2H290.27979c-2.3501-.61-4.66993-1.28-6.98-2a127.02725,127.02725,0,0,1-36.68994-18.05c-42.75-30.8-59.20019-89-51.77-141.15,4.62012-32.4,18.83985-65.48,46.52979-82.93,14.62012-9.23,33.3999-12.23,50.23-8.8.44043.08.88037.18,1.33008.27,14.48,3.26,27.37988,11.36,34.72021,24.41,13.19971,23.45,5.33985,52.5-1.1499,78.6-6.47021,26.1-9.98047,57.34,8.7998,76.59-6.20019-18.25-.08007-40.02,14.73-52.36,11.18994-9.31,26.77-12.8,40.98-9.91,1.35986.29,2.70019.62,4.02,1.02a44.59846,44.59846,0,0,1,9.16992,3.84C426.34961,514.31452,435.31982,542.80451,432.12988,567.97449Z" transform="translate(-185.5 -267.58547)" fill="#f2f2f2"/><path d="M363.23,630.4145c3.21973.75,6.44971,1.41,9.69971,2H355.35986c-2.30029-.62-4.59033-1.28-6.85986-2q-7.48534-2.34-14.74023-5.37c-19.39991-8.14-37.27-20.36-50.79-36.62a103.37091,103.37091,0,0,1-16.02-26.17,118.85639,118.85639,0,0,1-8.19971-33.49c-2.4502-23.6.0498-47.85,4.71973-71.03a296.45051,296.45051,0,0,1,23.16015-69.47q1.905-3.97494,3.93994-7.9a1.54158,1.54158,0,0,1,1.02979-.88,1.77741,1.77741,0,0,1,1.33008.27,2.1062,2.1062,0,0,1,.83008,2.78,293.03874,293.03874,0,0,0-24.58008,66.96c-5.31983,22.67-8.33985,46.39-7.31006,69.7.98,21.78,6.67041,43.2,19.58008,61.00994,11.79,16.26,28.06982,29.08,46.08008,37.81A169.131,169.131,0,0,0,363.23,630.4145Z" transform="translate(-185.5 -267.58547)" fill="#fff"/><path d="M401.79,632.4145h-5.18018c-.58007-.66-1.14013-1.33-1.68994-2a110.41123,110.41123,0,0,1-23.24023-49.66,107.73445,107.73445,0,0,1,9.29-67.05,110.2407,110.2407,0,0,1,10.04-16.62c1.35986.29,2.70019.62,4.02,1.02a106.05621,106.05621,0,0,0-19.77,45.34A105.09492,105.09492,0,0,0,400,630.4145C400.57959,631.08448,401.17969,631.75452,401.79,632.4145Z" transform="translate(-185.5 -267.58547)" fill="#fff"/><path d="M868.42938,615.40764c.75219,5.8933,3.51805,11.28515,6.4687,16.47906.09755.17682.19794.351.30078.52783h30.66735c.62024-.161,1.23248-.33782,1.84215-.52783a33.52491,33.52491,0,0,0,9.68315-4.76373c11.2825-8.12868,15.624-23.48872,13.663-37.25207-1.21933-8.55094-4.97218-17.28137-12.28006-21.88674a18.43729,18.43729,0,0,0-13.25661-2.32248c-.11624.02112-.23235.0475-.351.07126a13.67963,13.67963,0,0,0-9.1633,6.44224c-3.48365,6.18889-1.40929,13.85571.30348,20.744,1.70761,6.88828,2.634,15.13308-2.32243,20.21351a12.64393,12.64393,0,0,0-14.70288-16.4342c-.35889.07655-.71263.16363-1.061.26921a11.77068,11.77068,0,0,0-2.42011,1.01345C869.9549,601.24579,867.58749,608.76482,868.42938,615.40764Z" transform="translate(-185.5 -267.58547)" fill="#f2f2f2"/><path d="M886.61332,631.8867c-.84974.19794-1.70219.37211-2.55993.52783h4.637c.60709-.16362,1.21147-.33782,1.81044-.52783q1.97553-.61758,3.89022-1.41724a34.90012,34.90012,0,0,0,13.40442-9.66469,27.28163,27.28163,0,0,0,4.228-6.90674,31.36842,31.36842,0,0,0,2.164-8.83864,62.85793,62.85793,0,0,0-1.24562-18.7461,78.23849,78.23849,0,0,0-6.11239-18.33442q-.50277-1.04906-1.03982-2.08494a.40684.40684,0,0,0-.27178-.23225.46908.46908,0,0,0-.351.07126.55587.55587,0,0,0-.21908.73369,77.33813,77.33813,0,0,1,6.48714,17.672,68.02194,68.02194,0,0,1,1.92926,18.39511,29.3506,29.3506,0,0,1-5.16755,16.10164,32.4858,32.4858,0,0,1-12.16137,9.97875A44.6366,44.6366,0,0,1,886.61332,631.8867Z" transform="translate(-185.5 -267.58547)" fill="#fff"/><path d="M876.43662,632.41453h1.36714c.15309-.17418.3009-.351.446-.52783a29.13962,29.13962,0,0,0,6.13352-13.10618,28.43312,28.43312,0,0,0-2.45181-17.69573,29.095,29.095,0,0,0-2.64975-4.38633c-.35889.07655-.71263.16363-1.061.26921a27.99,27.99,0,0,1,5.21767,11.96606,27.73652,27.73652,0,0,1-6.5294,22.953C876.75608,632.06352,876.5977,632.24035,876.43662,632.41453Z" transform="translate(-185.5 -267.58547)" fill="#fff"/><path d="M592.00977,480.0937h-95.981L495.01123,450.583a8.85956,8.85956,0,0,1,9.93091-9.09863l55.85449,6.83936h.00684a31.29061,31.29061,0,0,1,31.2063,31.27Z" transform="translate(-185.5 -267.58547)" fill="#6c63ff"/><path d="M549.23082,375.4145H482.28871a6.77712,6.77712,0,0,0-6.77894,6.77894v66.94211a6.77713,6.77713,0,0,0,6.77894,6.77895h66.94211a6.77714,6.77714,0,0,0,6.779-6.77895V382.19344A6.77713,6.77713,0,0,0,549.23082,375.4145Z" transform="translate(-185.5 -267.58547)" fill="#ccc"/><path d="M534.15445,425.47126l-31.60628,6.15492a7.2107,7.2107,0,0,1-8.44659-5.69307L491.672,413.45694a7.21069,7.21069,0,0,1,5.69307-8.44658l31.60628-6.15491a7.21069,7.21069,0,0,1,8.44659,5.69307l2.42957,12.47616A7.21068,7.21068,0,0,1,534.15445,425.47126Z" transform="translate(-185.5 -267.58547)" fill="#3f3d56"/><path d="M527.831,410.73188l-24.12058,4.69717a1.69474,1.69474,0,0,1-.64789-3.327l24.12059-4.69717a1.69474,1.69474,0,0,1,.64788,3.327Z" transform="translate(-185.5 -267.58547)" fill="#fff"/><path d="M523.14259,417.68789l-12.47616,2.42957a1.69474,1.69474,0,0,1-.64789-3.327l12.47617-2.42957a1.69474,1.69474,0,1,1,.64788,3.327Z" transform="translate(-185.5 -267.58547)" fill="#fff"/><path d="M556.00977,382.19344v8.89737h-80.5v-8.89737a6.77712,6.77712,0,0,1,6.77894-6.77894h66.94211A6.77713,6.77713,0,0,1,556.00977,382.19344Z" transform="translate(-185.5 -267.58547)" fill="#b3b3b3"/><path d="M716.76052,393.87705a10.74267,10.74267,0,0,0-15.19331-6.3648l-92.09655-33.04273-4.05633,23.00726,91.8034,25.2454a10.80091,10.80091,0,0,0,19.54279-8.84513Z" transform="translate(-185.5 -267.58547)" fill="#ffb8b8"/><path d="M716.76052,393.87705a10.74267,10.74267,0,0,0-15.19331-6.3648l-92.09655-33.04273-4.05633,23.00726,91.8034,25.2454a10.80091,10.80091,0,0,0,19.54279-8.84513Z" transform="translate(-185.5 -267.58547)" opacity="0.2"/><path d="M625.81732,358.66188l-8.69674,22.72023a4.81688,4.81688,0,0,1-6.86086,2.47581l-21.13624-11.89627a13.37737,13.37737,0,0,1,9.63746-24.95856l23.6022,5.23464a4.81686,4.81686,0,0,1,3.45418,6.42415Z" transform="translate(-185.5 -267.58547)" fill="#6c63ff"/><path d="M724.00977,414.9145l-33,15,4.33259,16.311a253.73547,253.73547,0,0,1,6.53976,96.64985v0l24.12766,5.03915,20-51-7-58Z" transform="translate(-185.5 -267.58547)" fill="#6c63ff"/><path d="M788.75977,490.4145c-21.68213,0-39.35157,15.762-40.209,35.5h80.418C828.11133,506.17646,810.44189,490.4145,788.75977,490.4145Z" transform="translate(-185.5 -267.58547)" fill="#3f3d56"/><path d="M771.88135,493.81605c-1.12842-89.09839-51.87158-80.90155-51.87158-80.90155s.94921,27.73333,1.40527,28.59582c32.33545,61.17957-21.03027,132.90381-88.96,119.70886q-1.92114-.37317-3.69141-.75714a34.5813,34.5813,0,0,1-27.16328-38.76284c6.69158-53.73562-26.59062-52.7847-26.59062-52.7847H526.34326l-25.27335-22.7459a7.3469,7.3469,0,0,0-11.80868,2.92095l-3.25146,8.825s-48,5-44,52h14.83984a29.96684,29.96684,0,0,0,.16016,4l110.75092-.90044c6.49187-.05278,12.22225,5.20768,12.249,11.69971a11.75308,11.75308,0,0,1-12.14443,11.79594l-17.85546-.59521c-5.5,24.5,8,41,22.875,51.375a83.1484,83.1484,0,0,0,47.61766,14.625h48.50734c63,0,74-53,74-53C776.00977,534.9145,771.88135,493.81605,771.88135,493.81605Z" transform="translate(-185.5 -267.58547)" fill="#3f3d56"/><circle cx="600.25977" cy="307.07903" r="56.25" fill="#3f3d56"/><circle cx="600.25977" cy="307.07903" r="13.78676" fill="#fff"/><circle cx="316.25977" cy="298.57903" r="64.75" fill="#3f3d56"/><circle cx="316.25977" cy="298.57903" r="15.8701" fill="#fff"/><path d="M691.10352,434.34663,679.23,402.09711a13.63843,13.63843,0,0,1,8.08691-17.51074l34.04-12.53125a23.99761,23.99761,0,0,1,30.812,14.22705,23.84491,23.84491,0,0,1,1.481,8.29248,24.1887,24.1887,0,0,1-8.98779,18.73,23.81344,23.81344,0,0,1-6.72022,3.78907Z" transform="translate(-185.5 -267.58547)" fill="#3f3d56"/><path d="M753.1499,394.57447a23.54938,23.54938,0,0,1-8.80029,18.34,29.98827,29.98827,0,0,1-19.69971-41.3,23.50519,23.50519,0,0,1,28.5,22.96Z" transform="translate(-185.5 -267.58547)" fill="#6c63ff"/><ellipse cx="265.00977" cy="231.82903" rx="14" ry="17" fill="#6c63ff"/><polygon points="450.071 292.005 462.331 292.005 468.164 260.208 450.069 260.209 450.071 292.005" fill="#ffb8b8"/><path d="M632.44363,555.58794l24.1438-.001h.001a15.38605,15.38605,0,0,1,15.38648,15.38623v.5l-39.53052.00146Z" transform="translate(-185.5 -267.58547)" fill="#2f2e41"/><path d="M649.80136,546.54q-.21423,0-.43018-.02051l-16.96655-1.23535a4.49992,4.49992,0,0,1-3.80932-6.0293l22.70654-51.01464a3.49812,3.49812,0,0,0-.19629-2.79883,3.45084,3.45084,0,0,0-2.21118-1.75977c-10.67725-2.791-38.072-10.22265-61.78638-18.918-10.15991-3.72558-16.55884-9.10937-19.0188-16.00195-3.24316-9.08691,1.55469-17.374,1.7605-17.72168l.16089-.27246,22.3147,2.02832,24.19116,2.05762,53.01343,28.42773a20.086,20.086,0,0,1,8.8186,25.78418L653.90756,543.873A4.49689,4.49689,0,0,1,649.80136,546.54Z" transform="translate(-185.5 -267.58547)" fill="#2f2e41"/><circle cx="410.70532" cy="39.7202" r="24.56103" fill="#ffb8b8"/><polygon points="443.071 295.005 455.331 295.005 461.164 263.208 443.069 263.209 443.071 295.005" fill="#ffb8b8"/><path d="M625.44363,558.58794l24.1438-.001h.001a15.38605,15.38605,0,0,1,15.38648,15.38623v.5l-39.53052.00146Z" transform="translate(-185.5 -267.58547)" fill="#2f2e41"/><path d="M642.80136,549.54q-.21423,0-.43018-.02051l-16.96655-1.23535a4.49992,4.49992,0,0,1-3.80932-6.0293l22.70654-51.01464a3.49812,3.49812,0,0,0-.19629-2.79883,3.45084,3.45084,0,0,0-2.21118-1.75977c-10.67725-2.791-38.072-10.22265-61.78638-18.918-10.15991-3.72558-16.55884-9.10937-19.0188-16.00195-3.24316-9.08691,1.55469-17.374,1.7605-17.72168l.16089-.27246,22.3147,2.02832,24.19116,2.05762,53.01343,28.42773a20.086,20.086,0,0,1,8.8186,25.78418L646.90756,546.873A4.49689,4.49689,0,0,1,642.80136,549.54Z" transform="translate(-185.5 -267.58547)" fill="#2f2e41"/><path d="M603.78012,345.79386l-26-9s-16.322,12.54-8.481,43.64856a77.01209,77.01209,0,0,1-3.40009,48.32025,49.7787,49.7787,0,0,1-2.61889,5.53119s29,35,56,9l-10.5-50.5S625.28012,359.29386,603.78012,345.79386Z" transform="translate(-185.5 -267.58547)" fill="#6c63ff"/><path d="M599.25474,332.702c-3.49562-5.23231-6.25435-12.48756-2.40565-17.46591,3.79907-4.91416,11.29215-4.19018,17.11054-6.36466,8.104-3.02867,12.80409-12.5493,11.33824-21.07564s-8.31031-15.59442-16.46405-18.48645-17.34839-1.95148-25.33312,1.37887c-9.82931,4.0997-18.26115,12.03028-21.79686,22.07625s-1.6456,22.10808,5.68929,29.82963c7.86381,8.27834,20.20556,10.48454,31.62276,10.35067" transform="translate(-185.5 -267.58547)" fill="#2f2e41"/><path d="M576.40785,288.06942c-4.40484,3.58587-11.12527,1.99318-15.8536-1.15387s-8.56507-7.62825-13.681-10.09566c-9.01922-4.34995-19.92379-1.45825-28.70171,3.36009s-16.55916,11.475-25.83124,15.25617-21.10393,3.96808-28.12484-3.17161a25.732,25.732,0,0,0,37.7101,30.37145c10.1594-6.18839,15.77105-19.1637,27.16592-22.57933,6.3055-1.89008,13.07632-.36777,19.44917,1.28106s13.01783,3.43041,19.44912,2.02674,12.447-7.18312,11.6288-13.71475Z" transform="translate(-185.5 -267.58547)" fill="#2f2e41"/><path d="M715.53838,392.87666a10.74265,10.74265,0,0,0-15.86252-4.44158L604.2061,367.00792l-1.18664,23.33194,94.21678,13.72558a10.80091,10.80091,0,0,0,18.30214-11.18878Z" transform="translate(-185.5 -267.58547)" fill="#ffb8b8"/><path d="M620.94513,369.15135l-5.827,23.61966a4.81688,4.81688,0,0,1-6.503,3.3034l-22.44252-9.19753a13.37737,13.37737,0,0,1,6.48437-25.957l24.06772,2.28255a4.81687,4.81687,0,0,1,4.22042,5.94888Z" transform="translate(-185.5 -267.58547)" fill="#6c63ff"/><circle cx="519.00977" cy="136.82903" r="7" fill="#6c63ff"/><path d="M1014.5,631.4145a1.00308,1.00308,0,0,1-1,1h-827a1,1,0,0,1,0-2h827A1.00308,1.00308,0,0,1,1014.5,631.4145Z" transform="translate(-185.5 -267.58547)" fill="#3f3d56"/></svg>
        </div>
            }
        </div>
    );
};

export default Orders;