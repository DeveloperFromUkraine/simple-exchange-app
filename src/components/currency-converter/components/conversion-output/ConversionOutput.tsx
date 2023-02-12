import React, { FC } from "react";
import { Col, Row, Typography } from "antd";
import cn from "classnames";

import styles from "./ConversionOutput.module.scss";
import { roundTo } from "../../helpers/roundTo";

interface IConversionOutput {
	amount: number | undefined;
	amountToCurrency: number | undefined;
	fromCurrency: string | undefined;
	toCurrency: string | undefined;

	singleAmountRate: number | undefined;
}
export const ConversionOutput: FC<IConversionOutput> = ({amountToCurrency, amount, fromCurrency, toCurrency , singleAmountRate}) => {
		return (
			<>
				{amountToCurrency &&
					<>
						<Row>
							<Col span={24} className={styles["content-col-centered"]}>
								<Typography.Text className={styles["exchange-value"]}>
									{`${amount} ${fromCurrency} = `}
								</Typography.Text>
								<Typography.Text className={cn(styles["exchange-value"], styles["exchange-value-to"])}>
									{`${roundTo(amountToCurrency, 2)} ${toCurrency}`}
								</Typography.Text>
							</Col>
						</Row>
						<Row className={styles["exchange-value-single-wrapper"]}>
							<Col span={24} className={styles["content-col-centered"]}>
								<Typography.Text className={styles['exchange-value-single']}>{`1 ${fromCurrency} = ${singleAmountRate} ${toCurrency}`}</Typography.Text>
							</Col>
						</Row>
					</>
				}
			</>
		);
}
